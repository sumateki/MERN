//constructor -- predefined method
// which is used as a common method in all the  methods
// only created once and will be accessed to rest of the methods
//only created when we need common data for all the method


var emp_info = [

    {
        name: "suma",
        email: "suma@gmail.com"
    },
    {
        name: "chomu",
        email: "chomu@gmail.com"
    }
]

class read_empdata{
    constructor(data){
        this.val = data
    }

    emp_name(){
        var ans1= this.val.map((element)=>{
            document.write(element.name+"<br>")
        })
    }
    emp_email(){
        var ans2 = this.val.map((element)=>{
            document.write(element.email+"<br>")
        })
    }
}

var a1= new read_empdata(emp_info)
// a1.emp_name()
// a1.emp_email()




//-------------- GROCERY STORE TASK ---------------
var grocery_store = [
    {
        title: "Fresh Ginger",
        price: 110,
        status: "available",
        soldquantity: 50,
        comingsoon: "no",
        category: "vegetables",
        description: "Good source of Vitamin B6, C, Iron and  Potassium, Manganese and Dietary Fiber."
    },
    {
        title: "Fresh Chilli",
        price: 8,
        status: "unavailable",
        soldquantity: 20,
        comingsoon: "no",
        category: "vegetables",
        description: "Good source of Vitamin B6, C, Iron and  Potassium."
    },
    {
        title: "Fresh Banana",
        price: 20,
        status: "available",
        soldquantity: 90,
        comingsoon: "no",
        category: "fruits",
        description: "Rich in  Potassium, Vitamin C, B6 and Dietary Fiber."
    },
    {
        title: "Fresh Apple",
        price: 100,
        status: "unavailable",
        soldquantity: 0,
        comingsoon: "yes",
        category: "fruits",
        description: "Good source of Vitamin C, Dietary Fiber, Flavonoids and antioxidants."
    },
    {
        title: "Fresh Cabbage",
        price: 10,
        status: "available",
        soldquantity: 59,
        comingsoon: "no",
        category: "vegetables",
        description: "It is a Good source of Vitamin K, Dietary Fiber, Calicum, Potassium nd Phosphorus."
    },
    {
        title: "Fresh Capsicum",
        price: 90,
        status: "available",
        soldquantity: 79,
        comingsoon: "no",
        category: "vegetables",
        description: "Good source of Vitamin A,C,E Folate and Dietary Fiber."
    },
    {
        title: "Fresh Watermelon",
        price: 200,
        status: "unavailable",
        soldquantity: 0,
        comingsoon: "yes",
        category: "fruits",
        description: "Watermelons have excellent hydrating properties with 90% water content."
    },
    {
        title: "Fresh Brinjal",
        price: 90,
        status: "available",
        soldquantity: 40,
        comingsoon: "no",
        category: "vegetables",
        description: "Good Source of Thiamin and B6 and contains little measures of Vitamin E, Vitamin C."
    },
    {
        title: "Fresh Orange",
        price: 110,
        status: "available",
        soldquantity: 90,
        comingsoon: "no",
        category: "fruits",
        description: "Valencia Rich in taste 100% Natural."
    },
    {
        title: "Fresh Potato",
        price: 120,
        status: "unavailable",
        soldquantity: 0,
        comingsoon: "yes",
        category: "vegetables",
        description: "Good source of Vitamin B6, C, Potassium and Manganese."
    },
]


//1. Total available items name
//2. availble items price
//3. items which are out of stock
//4. all items (including out of stock)
//5. item rate greater than 100 rupees
//6. item rate less than 100 rupees
//7. coming soon items

class grcry_data{
    constructor(data){
        this.val = data
    }

    avail_item(){
        document.write("-----Avilable items name with Price -----<br><br>")
        this.val.map((item)=>{
            if(item.status == "available"){
                document.write(item.title+" -- "+"Price is "+item.price+"<br>")
            }
        })
    }
    out_of_stck(){
        document.write("<br><br>-----Items which are Out of Stock-----"+"<br><br>")
        this.val.map((item)=>{
            if(item.status == 'unavailable'){
                document.write(item.title+ "<br>")
            }
        })
    }
    ttl_item(){
        document.write("<br><br>-----Total Items-----"+"<br><br>")
       this.val.map((item)=>{
        document.write(item.title+"<br>")
       })
    }
    grtrthan_100(){
        document.write("<br><br>-----Items which are greater than 100rs of price-----"+"<br><br>")
        var greaterthan= this.val.filter((item)=>{
            return item.price > 100 
            // if(item.price >100){
            //     document.write(item.title+' --- '+item.price+"<br>")
            // }
        })
        greaterthan.forEach((item)=>{
            document.write(item.title+' --- '+"Price is "+item.price+"<br>")
        })

    }

    lessthan_100(){
        document.write("<br><br>-----Items which are lesser than 100rs of price-----"+"<br><br>")
        var lessthan =this.val.filter((item)=>{
            return item.price < 100 
            // if(item.price <100){
                // document.write(item.title+' --- '+item.price+"<br>")
            // }
        })
        lessthan.forEach((item)=>{
            document.write(item.title+' --- '+"Price is "+item.price+"<br>")
        })
        

    }
    cmngsoon(){
        document.write("<br><br>-----Items which are Coming Soon-----"+"<br><br>")
        this.val.map((item)=>{
            if(item.comingsoon == 'yes'){
                document.write(item.title+' --- '+item.comingsoon+"<br>")
            }
        })
    }


}

var items = new grcry_data(grocery_store)
items.avail_item()
items.out_of_stck()
items.ttl_item()
items.grtrthan_100()
items.lessthan_100()
items.cmngsoon()




