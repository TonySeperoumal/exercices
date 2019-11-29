const { BN, ether } = require('@openzeppelin/test-helpers');

const { expect } = require('chai');

const ERC20 = artifacts.require('ERC20');

contract('ERC20', function (accounts) {
  const _name = 'ERC20 Token';
  const _symbol = 'TOK';
  const _decimals = new BN(18);
  const owner = accounts[0];
  const recipient = accounts[1];
  let amount = new BN(50)

  // Avant chaque test unitaire
  beforeEach(async function () {
    this.ERC20Instance = await ERC20.new({from: owner});
  });
  // Premier test unitaire
  it('a un nom', async function () {
    expect(await this.ERC20Instance.name()).to.equal(_name);
  });
  // Deuxième test unitaire
  it('a un symbole', async function () {
    expect(await this.ERC20Instance.symbol()).to.equal(_symbol);
  });

  it('transfer', async function () {
    let totalSupply = await this.ERC20Instance.totalSupply();
    let balanceOfrecipient = await this.ERC20Instance.balanceOf(recipient);
    let balanceOfOwner = await this.ERC20Instance.balanceOf(owner);
    await this.ERC20Instance.transfer(recipient, amount);
    let balanceAfterOwner = await this.ERC20Instance.balanceOf(owner);
    let balanceAfterRecipient = await this.ERC20Instance.balanceOf(recipient);
    expect(balanceAfterOwner).to.be.bignumber.equal(balanceOfOwner.sub(amount));
    expect(balanceAfterRecipient).to.be.bignumber.equal(balanceOfrecipient.add(amount));
  })
})
