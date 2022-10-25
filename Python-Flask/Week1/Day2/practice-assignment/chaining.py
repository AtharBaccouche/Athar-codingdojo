class User:
    def __init__(self, name):
        self.name = name
        self.amount = 0
    def make_deposit(self,amount):
        self.amount +=amount
        return(self)
    def make_withdrawal(self, amount):
        self.amount=self.amount-amount
        return(self)
    def display_user_balance(self):
        print(f"user:{self.name},balance:{self.amount}")
        return(self)
    def transfer_money(self, amount, user):
        self.amount-=amount
        user.amount+=amount
        self.display_user_balance()
        user.display_user_balance()
        return(self)

messi=User("Lionel Messi")
Alex=User("Alex")
Andri=User("Andri")

messi.make_deposit(300).make_deposit(200).make_deposit(100).make_withdrawal(70).display_user_balance()


Alex.make_deposit(500).make_deposit(500).make_withdrawal(100).make_withdrawal(100).display_user_balance()

Andri.make_deposit(1500).make_withdrawal(500).make_withdrawal(1000).make_withdrawal(100).display_user_balance()


messi.transfer_money(500,Andri)
