import {mekkaResponseApiMock} from "@/component/pages/tvl/lib/mekkaResponseApiMock";
import {mosaic, palettes} from "anychart";
import {tokenColors} from "@/component/pages/tvl/lib/tokenColors";
import utils from "@/plugins/utils";
import {chainImages} from "@/component/pages/tvl/lib/chainImages";

export const initChartSettings = (
    {
        blocksPadding = 2,
        hasBlockLabel = true,
        hasTooltip = false,
    }) => {
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

    chart.pointsPadding(blocksPadding);

    chart.xAxis().labels().fontColor('#29323E');
    chart.yAxis().labels().fontColor('#29323E');

    if (hasBlockLabel) {
        chart.labels()
            .format((ctx) => '$' + utils.formatMoneyComma(ctx.value, 0))
            .fontColor('#29323E')
            .fontFamily('Roboto')
            .fontWeight('500')
    } else {
        chart.labels().enabled(false)
    }

    if (hasTooltip) {
        chart.tooltip()
            .separator(false)
            .format((ctx) => '$' + utils.formatMoneyComma(ctx.value, 2))
            .titleFormat('{%seriesName} on {%x} -')
            .background('#ffffff')
            .fontColor('#29323E')
            .fontFamily('Roboto')
            .fontSize(14)
            .title().fontColor('#29323E').fontFamily('Roboto')


    }

    return chart
}