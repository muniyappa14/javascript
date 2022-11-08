class Account{
    id;
    name;
    amount;

    constructor(a,b,c){
        this.id=a;
        this.name=b;
        this.amount=c;

    }
    get_balance(){
console.log(this.amount)
}
deposit_amount(amt_added){
this.amount=this.amount+amt_added
console.log(this.amount)
}
withdrawl_amount(amt_withdraw){
    this.amount=this.amount-amt_withdraw
    console.log("amount is withdraw",this.amount)
}


}
let ab=new Account(101,"muni",2000)
console.log(ab)
ab.get_balance()
ab.deposit_amount(100)
ab.withdrawl_amount(200)














