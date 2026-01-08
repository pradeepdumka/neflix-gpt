export const validateForm = (email,password,name,confirmPassword)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
      );
      const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isConfirmPassword =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(confirmPassword);
    
      if (!isEmailValid) return "Email ID is not valid";
      if (!isPasswordValid) return "Password is not valid";
      if (confirmPassword && !isConfirmPassword) return "Confirm Password is not valid";
      if(confirmPassword && password !== confirmPassword)return "Passwor and confirm password do not match";
    
      return null;
}

 