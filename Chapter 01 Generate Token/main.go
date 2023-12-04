package main

import (
	"fmt"

	"github.com/whatsauth/watoken"
)
var privateKey = "413fc1bd70ca08c02c877bd07c36106c2cbf3d55b0a2b40905cf58312724ad53b21bdc1fb598b030e6a11b7a5802be6942fca90e3cc354f892a3510c997b7241"
var publicKey = "b21bdc1fb598b030e6a11b7a5802be6942fca90e3cc354f892a3510c997b7241"

func main() {
    privateKey, publicKey := watoken.GenerateKey()
     
    //generate token for user awangga
    userid := "Users"
    tokenstring, _:= watoken.Encode(userid, privateKey)
    fmt.Println("ini privatekey", privateKey)
    fmt.Println("ini publickey", publicKey)
    fmt.Println("ini tokennya",tokenstring)
     //decode token to get userid
    useridstring := watoken.DecodeGetId(publicKey, tokenstring)
    if useridstring == "" {
        fmt.Println("expire token")
    }
 
 }
