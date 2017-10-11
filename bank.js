var Bank = function() {
  this.accounts = []
}

Bank.prototype = {

  addAccount: function(account) {
    this.accounts.push(account)
  },

  totalValue: function() {
    var valueOfAccounts = 0;
    for (var account of this.accounts) {
      valueOfAccounts += account.value;
      }
  return valueOfAccounts;
  },

  accountByName: function(name) {
    var accountFound;
    this.accounts.forEach(function(account) {
      if (account.name === name) {
        accountFound = account;
      }
    })
    return accountFound;
  },

  // accountByName: function(name) {
  //   for (var account of this.accounts) {
  //     if (account.name === name) {
  //       return account
  //     }
  //   }
  // },

  largestAccount: function() {
    return this.accounts.reduce( function(largest, account) {
      if ( account.value > largest.value ) {
        return account
      }
      return largest
    }, this.accounts[0] )
  },

  // largestAccount: function() {
  //   var largest = this.accounts[0]
  //
  //   this.accounts.forEach( function(account) {
  //     if ( account.value > largest.value) {
  //       largest = account
  //     }
  //   })
  //
  //   return largest
  // }

  averageValue: function() {
    return this.totalValue() / this.accounts.length;
  },

  findByType: function(type) {
    var accountsFound = [];
    this.accounts.forEach(function(account) {
      if (account.type === type) {
        accountsFound.push(account);
      }
    })
    return accountsFound;
  },

}



module.exports = Bank;
