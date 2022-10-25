class BankAccount:
    accounts=[]
    def __init__(self, int_rate, balance): 
        self.int_rate=int_rate 
        self.balance=balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance +=amount
        return self
    
    def withdraw(self, amount):
        if(self.balance-amount)>=0:
            self.balance-=amount
        else:
            print("Insufficient funds: changing a $5 fee")
            self.balance-=5
        return self


    def display_account_info(self):
        print(f"Blance:{self.balance}")
        return(self)

    def yield_interest(self):
        if self.balance>0:
            self.balance+=(self.balance*self.int_rate)
        return self

    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()




account1=BankAccount(.05,2000)
account2=BankAccount(.03, 5000)

account1.deposit(300).deposit(200).deposit(100).withdraw(70).display_account_info().yield_interest()
account2.deposit(300).deposit(200).withdraw(100).withdraw(70).withdraw(20).withdraw(30).display_account_info().yield_interest()
BankAccount.print_all_accounts()

