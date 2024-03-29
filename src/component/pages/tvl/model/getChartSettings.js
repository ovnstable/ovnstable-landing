import {mosaic, palettes} from "anychart";
import {tokenColors} from "@/component/pages/tvl/lib/tokenColors";
import utils from "@/plugins/utils";

export const getChartSettings = (
    {
        mekkaData = [],
        maxTvl = null,
        blocksPadding = 2,
        hasBlockLabel = true,
        hasTooltip = true,
        legendPosition = 'bottom',
        legendAlignment = 'left',
        legendMarginTop = 10,
    }) => {

    let names = []
    let valuesData =  mekkaData[0].values;
    for (let i = 0; i < valuesData.length; i++) {
        let valueData = valuesData[i];
        names.push(valueData.name);
        console.log("Value Name: ", valueData.name)
    }

    const data = {
        header: ['Name', ...names],
        rows: mekkaData.map((item) => {
            let values = []
            console.log("Chain name: ", item.chainName)
            for (let i = 0; i < item.values.length; i++) {
                values.push(item.values[i].value);
                console.log("Value value: ", item.values[i].value)
            }

            return [item.chainName, ...values]
        })
    };

    const chart = mosaic();

    const palette = palettes.distinctColors();

    palette.items([
        tokenColors.ETH,
        tokenColors.USDT,
        tokenColors.DAI,
        tokenColors.USD
    ]);

    chart.palette(palette);
    chart.legend().enabled(true).position(legendPosition);
    chart.legend().enabled(true).align(legendAlignment);
    chart.legend().enabled(true).margin(legendMarginTop);

    chart.data(data);
    chart.interactivity().selectionMode(false);

    chart.pointsPadding(blocksPadding);

    chart.xAxis().labels().fontColor('#29323E');
    chart.yAxis().labels().enabled(false)

    if (hasBlockLabel) {
        chart.labels()
            .format((ctx) => {
                if (ctx.value < 500000) {
                    return ''
                }

                if (ctx.seriesName === 'USD+') {
                    if (utils.formatNumberToPercent(parseInt(ctx.value), maxTvl) < 2) {
                        return ''
                    }

                    if (utils.formatNumberToPercent(parseInt(ctx.value), maxTvl) < 5) {
                        return `$${utils.formatNumberToMln(ctx.value)}m`
                    }
                }

                return `$${utils.formatNumberToMln(ctx.value)}m ${ctx.seriesName}`
            })
            .fontColor('#FFFFFF')
            .fontSize(14)
            .fontFamily('Roboto')

    } else {
        chart.labels()
            .format((ctx) => {
                if (ctx.value < 500000) {
                    return ''
                }

                return `$${utils.formatNumberToMln(ctx.value)}m`
            })
            .fontColor('#FFFFFF')
            .fontSize(10)
            .fontFamily('Roboto')
    }

    chart.listen("pointClick", function(e) {
        console.log(e.iterator)

        // for info
        // console.log(e.iterator.Ra.Br)
        const row = e.iterator.getIndex();
        let chainName = mekkaData[row].chainName;

        let type = e.iterator.Ra.Br;
        if (type === 'USD+') {
            window.open('https://app.overnight.fi/collateral?tabName=' + chainName.toLowerCase(),"_self");
            return;
        }

        if (type === 'USDT+') {
            window.open('https://app.overnight.fi/collateral/usdt?tabName=' + chainName.toLowerCase(),"_self");
            return;
        }

        if (type === 'DAI+') {
            window.open('https://app.overnight.fi/collateral/dai?tabName=' + chainName.toLowerCase(),"_self");
            return;
        }

        if (type === 'ETH+') {
            window.open('https://app.overnight.fi/collateral/eth?tabName=' + chainName.toLowerCase(),"_self");
            return;
        }

        console.error("Type chart not found for open link, type:", type);
    });

    chart.tooltip()
        .separator(false)
        .format((ctx) => '$' + utils.formatNumberToMln(ctx.value) + 'm' + (maxTvl ? ' ~' + utils.formatNumberToPercent(parseInt(ctx.value), maxTvl)  + '%' : ''))
        .titleFormat('{%seriesName} on {%x}')
        .background('#ffffff')
        .fontColor('#29323E')
        .fontFamily('Roboto')
        .fontSize(14)
        .title().fontColor('#29323E').fontFamily('Roboto')

    return chart
}
