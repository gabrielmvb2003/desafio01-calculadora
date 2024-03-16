import { InputContainer } from "../Input/style";
const Input = ({value}) =>{
  return (
    <InputContainer>
      <input disabled value={value}/>
    </InputContainer>
    );
}

export default Input;