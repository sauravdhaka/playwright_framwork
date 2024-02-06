import {test , expect} from '@playwright/test'

test("should be able to create a booking",async({request})=>{
    const response = await request.post('/booking',{
        data:{
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2024-02-02",
                "checkout" : "2024-02-03"
            },
            "additionalneeds" : "Breakfast"
        }
    })
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname","Jim")
    expect(responseBody.booking).toHaveProperty("lastname","Brown")
    expect(responseBody.booking).toHaveProperty("totalprice",111)
    expect(responseBody.booking).toHaveProperty("depositpaid",true)
});

