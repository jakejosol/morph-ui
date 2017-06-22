module.exports = {
    getShadowFromElevation: elevation => {
        if (elevation == 0)
        {
            return shadow;
        }
        else
        {
            var shadow = "0px ";

            var ambientY = elevation;
            var ambientBlur = elevation == 1 ? 3 : elevation * 2;
            var ambientAlpha = (elevation + 10 + (elevation / 9.38)) / 100;

            shadow += ambientY + "px " + ambientBlur + "px rgba(0, 0, 0, " + ambientAlpha + "), 0px ";

            var directY = elevation < 10 ? Math.floor(elevation / 2) + 1 : elevation - 4;
            var directBlur = elevation == 1 ? 3 : elevation * 2;
            var directAlpha = (24 - Math.round(elevation / 10)) / 100;

            shadow += directY + "px " + directBlur + "px rgba(0, 0, 0, " + directAlpha + ")";

            return shadow;
        }
    }
};