import { useTheme } from "next-themes";

const Baloons = () => {
  const { resolvedTheme } = useTheme();
  let color = resolvedTheme === 'light' 
  ? '#6CF9F8'
  : '#F739C0'
  return (
    <ul className="circles" >
      <li style={{background: color}} ></li>
      <li style={{background: color}}></li>
      <li style={{background: color}}></li>
      <li style={{background: color}}></li>
      <li style={{background: color}}></li>
      <li style={{background: color}}></li>
      <li style={{background: color}}></li>
      <li style={{background: color}}></li>
      <li style={{background: color}}></li>
      <li style={{background: color}}></li>
      
    </ul>
  );
};

export default Baloons;
