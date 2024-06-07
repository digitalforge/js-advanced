class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    if (!Number.isFinite(balance))
      throw new Error(`${balance} is not a valid number`)
    this.balance = balance
    ;(this.accountHolder = accountHolder), (this.accountNumber = accountNumber)
  }

  deposit(amt) {
    this.balance = this.balance + amt
    return `You deposited $${amt}. New Balance: $${this.balance}`
  }

  withDraw(amt) {
    if (this.balance - amt < 0) {
      return 'Insufficient funds'
    } else {
      this.balance = this.balance - amt
      return `You withdrew $${amt}. New Balance: $${this.balance}`
    }
  }
}
