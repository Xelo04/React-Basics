interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning"; // the ? means that this prop is optional
  // the primary is now the only color avaiable to no give errors in App.tsx
  // if anything other then specified is passed it will give an error
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
