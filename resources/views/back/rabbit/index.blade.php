<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    <header>
        <h1>RabbitMq</h1>
    </header>
    <div id="data"></div>
    <button id="rabbit-set">SET</button>
    <button id="rabbit-get">GET</button>

    <script type="text/javascript">
        window.onload = () => {
            const set = document.getElementById('rabbit-set');
            const get = document.getElementById('rabbit-get');
            const data = document.getElementById('data');


            set.addEventListener("click", () => {
                $.get( "/rabbit/set", () => {
                    data.innerHTML = "Set data";
                });
            });

            get.addEventListener("click", () => {
                $.get( "/rabbit/get", response => {
                    data.innerHTML = response;
                });
            });
        };
    </script>
</body>