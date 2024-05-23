# Render 
 
 * render method takes react component/elements --> convert it into dom elements 
 
 * render method compare the previous version with UI with latest changes

 * render method updates the actual UI then
 
 ** function Component (){
     fun handle (){
        setcount(count+1)
        console.log(count) -------why it doen't print value 1
     }
 }

 ans :- lies in react working exicution 
      1. react makes to  two Virtual DOm copy 
           a.) Master copy -- it is intial not changed blue print 
           b.) working copy -- all the changes lies here any update in dom 
      2. now react compare working copy to master copy state that what is changed  in process it scan whole   function  or component .

      3. in that setfunction is  cause of re-render of state but it doesn't  update instantly the whole function runs through (in that sinerio the console is excuted and it prints no chage then after function exicution complete it renders in ui)
      
      4. to neglect this sinerio  If you requied the instant update in state  for any puropse then you have to use CB in 
      setFunction(
        function(prevValue){
            return prevValue +1
            })     
     5. and these things all happend in react memory only final result is stated in deep memory.