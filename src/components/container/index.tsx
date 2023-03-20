interface IProps {
    className?: string,
    children: React.ReactNode
}

const Container = ({children,className = ''}: IProps) => {
    return (
        <div className={`container mx-auto px-5 tablet:px-0 ${className}`}>
            {children}
        </div>
    )
}

export default Container