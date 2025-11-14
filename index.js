function signup(userName)
{ let flag=0;
  let array=["Hnai127","Neha127","Umme127","hani127"];
  for(i=0;i<array.length;i++)
  {
    if(userName==array[i])
    {
        flag=1;
    }
  }
  if(flag==0)
  {
    array.push(userName);
    console.log("Signup Successfull ,Please Login");
  }
  else{
    console.log("User Already Registered,Please Login");
  }
}
signup("hani0127");
function login( userName ,password)
{ let flag=0;
    let array=["Hani127","xyz1223","123opo","hello123"];
    for(let i=0;i<array.length;i++)
    {
        if(userName==array[i])
        {
            flag=1
        }
    }
    if(flag==0)
    {
        console.log("User Not Found, Please Sign up");
    }else if(password=="Emp@123")
    {
        console.log("Login Successfull");
    }
    else{
        console.log("Wrong Password");
    }

}