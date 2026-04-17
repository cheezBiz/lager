// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

contract Lager {

    //-----------------------------------//
    //----------STATE VARIABLES ---------//

    mapping(uint => bool) public conversation;
    mapping(uint => mapping(address => bool)) public users;

    uint public fees;
    mapping(address => bool) public owners;
    address[3] public ownerAddresses;
    uint8 public activeOwners; // Tracks actual number of owners

    mapping(address => bool) public consensus;
    bool public consensusResult;

    bool private noReEnter;
    bool public pause;

    // Mapping: TargetLeader => (Voter => VoteStatus)
    mapping(address => mapping(address => bool)) public leaderShip_control;

    //-----------------------------------//
    //------------- EVENTS --------------//

    event conversationCreated(uint indexed conversationID);
    event message(uint indexed conversationID, bytes message);    
    event participantAdded(uint indexed conversationID, address participant);
    event contractIs(bool state);
    event consensusState(bool state);
    event voted(address voter, bool vote);
    event leaderRemoved(address removedLeader);
    event leaderAdded(address newLeader);

    //-----------------------------------//
    //------------ MODIFIERS ------------//

    modifier paused() {
        require(!pause, "Contract is paused");
        _;
    }

    modifier checkConsensus() {
        require(consensusResult, "No agreement");
        _;
        // Reset consensus for safety after use
        consensusResult = false;
        for(uint8 i = 0; i < 3; i++){
            if (ownerAddresses[i] != address(0)) {
                consensus[ownerAddresses[i]] = false;
            }
        }
    }

    modifier onlyOwner() {
        require(owners[msg.sender], "Not an owner");
        _;
    }

    modifier reEntrancyProtection() {
        require(!noReEnter, "Function already in use");
        noReEnter = true;
        _;
        noReEnter = false;
    }

    constructor(uint fees_, address owner_1, address owner_2, address owner_3) {
        require(owner_1 != address(0) && owner_2 != address(0) && owner_3 != address(0), "Zero address");
        fees = fees_;
        
        owners[owner_1] = true;
        owners[owner_2] = true;
        owners[owner_3] = true;

        ownerAddresses[0] = owner_1;
        ownerAddresses[1] = owner_2;
        ownerAddresses[2] = owner_3;
        
        activeOwners = 3;
    }

    //-----------------------------------//
    //--------- CORE FUNCTIONS ----------//

    function createConversation(uint identifier) external payable paused {
        require(msg.value >= fees, "Not enough fees");
        require(!conversation[identifier], "ID in use");

        conversation[identifier] = true;
        users[identifier][msg.sender] = true;

        emit conversationCreated(identifier);
    }

    function addParticipant(uint identifier, address participant) external paused {
        require(conversation[identifier], "Not active");
        require(users[identifier][msg.sender], "Not participant");
        users[identifier][participant] = true;
        emit participantAdded(identifier, participant);
    }

    function deliverMessage(uint identifier, bytes memory message_) external paused {
        require(conversation[identifier], "Not active");
        require(users[identifier][msg.sender], "Not participant");
        emit message(identifier, message_);
    }

    //-----------------------------------//
    //--------- ACCESS CONTROL ----------//

    function getConsensus() external {
        uint8 count = 0;
        for(uint8 i = 0; i < 3; i++){
            if(ownerAddresses[i] != address(0) && consensus[ownerAddresses[i]]) {
                count++;
            }
        }
        // Requires 2 votes if 2 or 3 owners exist. If 1 owner, use soleLeader.
        if(count >= 2) {
            consensusResult = true;
        }
        emit consensusState(consensusResult);
    }

    function agree(bool state) external onlyOwner {
        consensus[msg.sender] = state;
        emit voted(msg.sender, state);
    }

    function vote(address leader, bool state) external onlyOwner {
        leaderShip_control[leader][msg.sender] = state; 
    }

    function addLeader(address newLeader, address otherLeader) external onlyOwner {
        require(newLeader != address(0), "Zero address");
        require(!owners[newLeader], "Already owner");
        require(msg.sender != otherLeader, "Need unique co-signer");
        require(leaderShip_control[newLeader][msg.sender] && leaderShip_control[newLeader][otherLeader], "No consensus");

        bool success = false;
        for(uint8 i = 0; i < 3; i++) {
            if(ownerAddresses[i] == address(0)) {
                ownerAddresses[i] = newLeader;
                owners[newLeader] = true;
                activeOwners++;
                success = true;
                break;
            }
        }
        require(success, "Slots full");
        emit leaderAdded(newLeader);
    }

    function removeLeader(address recipient, address otherLeader) external onlyOwner {
        require(recipient != address(0), "Zero address");
        require(msg.sender != otherLeader, "Need unique co-signer");
        require(leaderShip_control[recipient][msg.sender] && leaderShip_control[recipient][otherLeader], "No consensus");

        owners[recipient] = false;
        consensus[recipient] = false; // Wipe stale consensus votes

        for(uint8 i = 0; i < 3; i++) {
            if(ownerAddresses[i] == recipient) {
                ownerAddresses[i] = address(0);
                activeOwners--;
                break;
            }
        }
        emit leaderRemoved(recipient);
    }

    function pauseContract(bool state) external onlyOwner checkConsensus {
        pause = state;
        emit contractIs(state);
    }

    function extractFunds(address payable recipient, uint amount) external onlyOwner checkConsensus reEntrancyProtection {
        require(address(this).balance >= amount, "Low balance");
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Transfer failed");
    }

    // Emergency rescue if only 1 owner remains
    function soleLeader(address payable recipient, uint amount) external onlyOwner reEntrancyProtection {
        require(activeOwners == 1, "Multisig active");
        require(address(this).balance >= amount, "Low balance");
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Transfer failed");
    }

    receive() external payable {}
    fallback() external payable {}
}