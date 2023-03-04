import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
  }
  
  const Error = (props: Props) => {
    const {className, children} = props
    return (
         <div
          className={`${className} capitalize px-4 py-3 mt-3 outline outline-1 outline-red-400 
                rounded bg-red-100 text-red-900 text-xs`}
        >
          <span>{children}</span>
        </div>
    )
  }


  export default Error