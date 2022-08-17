//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Projekat{
    address payable private owner;
    uint256 private reserve;

    struct Data{
        string name;
        string lastName;
        string email;
        string shippingAddres;
        address buyer;
    }

    event Ordered(
        Data data
    );

    constructor(){
        owner = payable(msg.sender);
        reserve = 100;
    }

    function getReserve() public view returns(uint256){
        return reserve;
    }

    function getOwner() public view returns(address){
        return owner;
    }

    function order(string memory _name, string memory _lastName, string memory _email, string memory _shippingAddres) public payable{
        address _buyer = msg.sender;
        require(msg.value >= 0.3 ether, "Not enough ether sent");

        (bool sent,) = owner.call{value: 0.3 ether}("");
        require(sent);

        reserve -= 1;
        emit Ordered(Data(
            _name,
            _lastName,
            _email,
            _shippingAddres,
            _buyer
        ));
    }

}