# if there is  nest page or  nested components - the way prop will be shared is 
 * prop drilling - forcefully giving prop to a component that is not needed but in that component last child needs it . 

 # Cotext Api 
  --- 3- steps
1. step 1. Create Context 
2. step 2. Provide Context 
3. step 3. Consume Context

short form CPC

 ## step 1 create Context 
  const AuthContext = React.createContext();
*  authcontext is just a variable you can write any name 
*  auth context has too many values but we need only { AuthContext.provider}
 
## step 2  giving obj in value (prop)  :- it is like a box  in box box of  auth context 

<AuthContext.Provider value={ { isLoggedIn : true } }>
<App/>
</AuthContext.Provider> -: it is react componenet provided by react

* auth cotext wraped around app  

# prop values ={ string ,number , boolean , object array , function , null ,undefined} 