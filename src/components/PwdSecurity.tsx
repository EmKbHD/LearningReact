import { useMemo, useState } from "react";
import Input from "./forms/Input";

function PwdSecurity() {
  const [firstname, setFirstname] = useState("John");
  const [password, setPassword] = useState("Password");
  const security = useMemo(() => {
    return passwordSecurity(password);
  }, [password]);

  // console.log("render Password Security");
  return (
    <div className="container my-3 vstack gap-2">
      <Input label="Username" value={firstname} onChange={setFirstname} />
      <div>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        Security Level : <strong>{security}</strong>
      </div>
    </div>
  );
}

function passwordSecurity(password) {
  // Detect slowness
  let starTime = performance.now();
  while (performance.now() - starTime < 200) {}
  if (password.length < 3) {
    return "Weak Password";
  } else if (password.length < 6) {
    return "Medium Password";
  }
  return "Strong Password";
}

export default PwdSecurity;
