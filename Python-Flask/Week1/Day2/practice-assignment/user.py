class User:
    def __init__(self, name):
        self.name = name
        self.amount = 0
    def make_deposit(self,amount):
        self.amount +=amount
    def make_withdrawal(self, amount):
        self.amount=self.amount-amount
    def display_user_balance(self):
        print(f"user:{self.name},balance:{self.amount}")
    def transfer_money(self, amount, user):
        self.amount-=amount
        user.amount+=amount
        self.display_user_balance()
        user.display_user_balance()

messi=User("Lionel Messi")
Alex=User("Alex")
Andri=User("Andri")

messi.make_deposit(300)
messi.make_deposit(200)
messi.make_deposit(100)
messi.make_withdrawal(70)
messi.display_user_balance()


Alex.make_deposit(500)
Alex.make_deposit(500)
Alex.make_withdrawal(100)
Alex.make_withdrawal(100)
Alex.display_user_balance()

Andri.make_deposit(1500)
Andri.make_withdrawal(500)
Andri.make_withdrawal(1000)
Andri.make_withdrawal(100)
Andri.display_user_balance()


messi.transfer_money(500,Andri)
