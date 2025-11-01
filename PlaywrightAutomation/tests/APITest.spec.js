import { expect, test } from "@playwright/test";

//Get the User details - Get Request
test("Get User", async ({ request }) => {
     const response = await request.get('https://reqres.in/api/users?page=2')
     console.log(await response.status())
     console.log(await response.statusText())
     expect(response.status()).toBe(200)
 })

// Create User details - POST Request
test("Create user", async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "test",
            "job": "tester",
        }, headers: {
            "Accept": "application/json"
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(201)
    var res = await response.json()
    userid=res.id;
})

// Update User details - Put Request
test("Update user", async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/'+userid, {
        data: {
            "name": "test",
            "job": "Automation Tester",
        }, headers: {
            "Accept": "application/json"
        }
    });
    console.log(await response.json());
})
 
// Delete User details - Delete Request
test("Delete user", async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/'+userid);
    expect(response.status()).toBe(204)
})