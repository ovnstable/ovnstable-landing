import {mekkaResponseApiMock} from "@/component/pages/tvl/helpers/mekkaResponseApiMock";
import {mosaic, palettes} from "anychart";
import {tokenColors} from "@/component/pages/tvl/helpers/tokenColors";
import utils from "@/plugins/utils";
import {chainImages} from "@/component/pages/tvl/helpers/chainImages";

export const initChartSettings = () => {
    const data = {
        header: ['Name', ...Object.keys(mekkaResponseApiMock[0].values)],
        rows: mekkaResponseApiMock.map((item) => {
            return [item.chainName, ...Object.values(item.values)]
        })
    };

    const chart = mosaic();

    const palette = palettes.distinctColors();

    palette.items([
        tokenColors.USDT,
        tokenColors.DAI,
        tokenColors.USD,
        tokenColors.ETS
    ]);

    chart.palette(palette);

    chart.data(data);

    // chart.legend(true);

    chart.tooltip().format('{%seriesName}: ${%Value}M');

    chart.labels()
        .format((ctx) => '$' + utils.formatMoneyComma(ctx.value, 0))
        .fontColor('#29323E')
        .fontFamily('Roboto')
        .fontWeight('500')

    chart.pointsPadding(2);

    chart.xAxis().labels().fontColor('#29323E');
    chart.yAxis().labels().fontColor('#29323E');

    // labels.useHtml(true).format(function(ctx) {
    //     return "- <span style='color:#64b5f6'>{%progress}</span>";
    // })

    return chart
}