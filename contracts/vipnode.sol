pragma solidity ^0.4.20;

contract vipnode {

    // Join is emitted when a new client reserves a slot.
    event Register(
        address owner,
        string enode,
        uint timeExpires

    );
    // Minimum price.
    uint public weiPrice = 0;

    // Interval of new memberships.
    uint public interval = 30 days;

    // Number of members to allow.
    uint public limitRegistered = 20;

    // Number of members who joined, including renewals.
    uint public numRegistered = 0;

    // contractOwner can withdraw the funds and adjust the settings.
    address contractOwner;

    // withdrawWallet is the fixed destination of funds to withdraw. It is
    // separate from contractOwner to allow for a cold storage destination.
    address withdrawWallet;

    mapping (string => uint) members;

    function vipnode(address _contractOwner, address _withdrawWallet) public {
        require(_contractOwner != address(0));
        require(_withdrawWallet != address(0));

        contractOwner = _contractOwner;
        withdrawWallet = _withdrawWallet;
    }

    /// withdraw allows the owner to transfer out the balance of the contract.
    function withdraw() public {
        require(msg.sender == contractOwner);
        withdrawWallet.transfer(address(this).balance);
    }

    function config(uint _weiPrice, uint _interval, uint _limitRegistered) public {
        require(msg.sender == contractOwner);

        weiPrice = _weiPrice;
        interval = _interval;
        limitRegistered = _limitRegistered;
    }

    function register(string _enode) payable public {
        require(msg.value >= weiPrice);
        require(numRegistered < limitRegistered);

        numRegistered++;

        uint timeExpires = block.timestamp + interval;
        assert(timeExpires > block.timestamp);

        members[_enode] = timeExpires;
        emit Register(msg.sender, _enode, timeExpires);
    }
}
