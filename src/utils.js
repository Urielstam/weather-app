import { format } from "date-fns";

export const utils = (() => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const formattedDate = format(date, "eee d MMMM yyyy");
        console.log(formattedDate);
        return formattedDate;
    };

    return {
        formatDate,
    };
})();
