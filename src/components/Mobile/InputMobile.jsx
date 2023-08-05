const InputMobile = ({ text = "", type = "text" }) => {
  return (
    <input
    className="w-full px-6 py-4 placeholder:leading-4 placeholder:text-sm bg-[#F4F4F4] rounded-lg"
    type={type}
    placeholder={text}
  />
  )
}
export default InputMobile