import Image from "next/image";
import Link from "next/link";
import SaveRemoveButton from "../RemoveButton/SaveRemoveButton";

const SaveCard = ({ plan }) => {

    return (
        <div className="w-full rounded-2xl border border-[#292c32] bg-[#15171c] p-3 transition-all duration-300 hover:scale-[1.01] hover:border-lime-400/40 hover:bg-[#181b20]">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">


                <Image
                    width={400}
                    height={400}
                    src={plan.image}
                    alt={plan.name}
                    className="h-40 w-full rounded-lg object-cover sm:h-16 sm:w-28"
                />



                <div className="min-w-0 flex-1">

                    <h2 className="text-sm font-bold uppercase text-white sm:text-base">
                        {plan.name}
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                        {plan.equipment}
                    </p>


                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-gray-300 sm:text-xs">

                        <span className="flex items-center gap-1">
                            <span className="text-lime-400">◯</span>
                            {plan.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <span className="text-lime-400">♨</span>
                            {plan.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <span className="text-lime-400">☆</span>
                            {plan.rating}
                        </span>

                    </div>

                </div>


                <div className="flex w-full items-center gap-2 sm:w-auto sm:gap-3">

                    <Link
                        href={`/Workout/${plan.id}`}
                        className="flex-1 rounded-full border border-gray-600 px-3 py-2 text-center text-[10px] text-white transition-all duration-300 hover:border-lime-400 hover:text-lime-400 sm:flex-none sm:px-5 sm:text-xs"
                    >
                        View Details
                    </Link>

                    <div className="shrink-0">
                        <SaveRemoveButton plan={plan} />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SaveCard;