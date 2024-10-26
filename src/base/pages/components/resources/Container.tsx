
type Props = {
    children: React.ReactNode
}

export function Container(props: Props) {
    return (
        <div className="w-screen flex flex-col justify-start items-center">
            {props.children}
        </div>
    )
}