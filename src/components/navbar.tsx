
type NavBarProps =
{
    onClickBtn1 : () => void;
    onClickBtn2 : () => void;
    onClickBtn3 : () => void;
}
export default function NavBar({onClickBtn1, onClickBtn2, onClickBtn3}: NavBarProps)
{
    return(
        <div className="bg-gray-500 flex gap-5 p-4 justify-between px-10">
            <button className=" bg-green-600 rounded-xs p-2 text-white"
            onClick={onClickBtn1}>
                Button 1
            </button>

            <button className=" bg-green-600 rounded-xs p-2 text-white"
            onClick={onClickBtn2}>
                Button 2
            </button>
            
            <button className=" bg-green-600 rounded-xs p-2 text-white"
            onClick={onClickBtn3}>
                Button 3
            </button>
            
        </div>
    )
}

