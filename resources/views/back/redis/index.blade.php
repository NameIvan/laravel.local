<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    <header>
        <h1>Redis</h1>
    </header>
    <div id="data"></div>
    <button id="redis-set">SET</button>
    <button id="redis-get">GET</button>

    <script type="text/javascript">
        window.onload = () => {
            const set = document.getElementById('redis-set');
            const get = document.getElementById('redis-get');
            const data = document.getElementById('data');


            set.addEventListener("click", () => {
                $.get( "/redis/set", () => {
                    data.innerHTML = "Set data";
                });
            });

            get.addEventListener("click", () => {
                $.get( "/redis/get", response => {
                    data.innerHTML = response;
                });
            });
        };
    </script>
</body>