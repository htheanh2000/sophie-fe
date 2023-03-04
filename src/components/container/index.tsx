interface IProps {
    className?: string,
    children: React.ReactNode
}

const Container = ({children,className = ''}: IProps) => {
    return (
        <div className={`container mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container