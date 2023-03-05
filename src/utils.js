import { format } from "date-fns";

export const utils = (() => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const formattedDate = format(date, "eee d MMMM yyyy h:mm a");
        // console.log(formattedDate.split(" ").splice(0, 4).join(" "));
        return formattedDate.split(" ").splice(0, 4).join(" ");
    };

    const getDailyValues = (forecastResponseData) => {
        let highestTemps = [];
        let lowestTemps = [];
        let dates = [];

        const dailyData = forecastResponseData.list.reduce((acc, item) => {
            const date = item.dt_txt.split(" ")[0];
            if (!acc[date]) acc[date] = [];
            acc[date].push(item);
            return acc;
        }, {});

        forecastResponseData.list.filter((item) => {
            if (item.dt_txt.includes("00:00:00")) {
                dates.push(item.dt);
            }
        });

        Object.entries(dailyData).forEach(([date, items]) => {
            const temperatures = items.map((item) => item.main.temp);
            let maxTemp = Math.max(...temperatures);
            highestTemps.push(maxTemp);
            let minTemp = Math.min(...temperatures);
            lowestTemps.push(minTemp);
        });
        return [dates, highestTemps, lowestTemps];
    };

    return {
        formatDate,
        getDailyValues,
    };
})();
