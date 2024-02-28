import React from 'react'
import { useEffect, useState, useMemo } from 'react';
import Singleton from '~/components/redux/Redux'
import Button from '~/components/common/Button';
const Login = () => {
  const singletonInstance = useMemo(() => new Singleton(), []);
  const [count, setCount] = useState(0)
  const handleIncrease = () => {
    singletonInstance?.increaseValue();
    setCount(singletonInstance?.getData().value);
    console.log(singletonInstance)
  }
  useEffect(() => {
    // Sử dụng đối tượng Singleton
    console.log(singletonInstance?.getData());
    setCount(singletonInstance?.getData().value)
  }, []);
  return (
    <div className='h-[500px]'>
      Login
      <p>{count}</p>
      <Button ClickEvent={handleIncrease} text={"Tăng 1"}></Button>
    </div>
  )
}

export default Login