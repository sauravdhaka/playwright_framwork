import {test , expect} from "@playwright/test"


test("Should be able to get all booking information", async ({request}) =>{
    const response  =await request.get("/booking")
    expect(response.status()).toBe(200)
})


test("Should be able to get all booking information by first name", async ({request}) =>{
    const response  =await request.get("/booking?firstname=Jim")
    expect(response.status()).toBe(200)

})

test("shoulld be able to get all bookings with firstname and last name", async({request})=>{
    const response = await request.get("/booking?firstname=Jim&lastname=Brown")

    expect(response.status()).toBe(200)
    const result = await  response.json()
    console.log(result);
    expect(Object.keys(result).length).toBeGreaterThan(0);

    
})

test("should be able to get booking with chekin and check out time",async({request})=>{
    const response = await request.get("/booking?checkin=2014-03-13&checkout=2014-05-21")
    expect(response.status()).toBe(200)
    const result = await  response.json()
})


test("should be able to get booking with booking ID",async({request})=>{
    const response = await request.get("/booking/1117")
    expect(response.status()).toBe(200)
    const result = await response.json()
    expect(Object.keys(result).length).toBeGreaterThan(0);
    console.log(result)
    expect(result.firstname).toBe("Jim")
    expect(result.lastname).toBe("Brown")
    expect(result.depositpaid).toBeTruthy()

})