import SalesUser from "./_components";
import SalesProperty from "./_components/salesProperty";

export default function SalesReport(){
    return(
        <div className="flex flex-col gap-4 p-4 bg-white">
            <SalesUser/>
            <SalesProperty/>
     
        </div>
    )
}