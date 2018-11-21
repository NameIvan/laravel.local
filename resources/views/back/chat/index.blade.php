<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Websocket</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            body {
                background-color: black;
                color: #0F0;
                font-family: 'Consolas', monospace;
            }

            header {
                text-align: center;
            }

            #messages {
                margin-left: 1em;
                list-style: none;
            }

            #form {
                display: flex;
            }

            input, label {
                display: block;
            }

            input {
                outline: none;
                border: none;
                background-color: black;
                color: #0F0;
                padding: 1em .5em;
                display: block;
                font-size: 1.5em;
                font-family: 'Consolas', monospace;
                flex: 1;
            }

            label {
                display: block;
                padding: 1em .5em;
                font-size: 1.5em;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    @endauth
                </div>
            @endif

            <header>
                <h1>CodeChat</h1>
                <span id="status">OFFLINE</span>
            </header>

            <main>
                <ul id="messages"></ul>

                <form id="form">
                    <label for="message">&gt;</label>
                    <input type="text" id="input" required autofocus autocomplete="off">
                </form>
            </main>
        </div>

        <script type="text/javascript">
            const status = document.getElementById('status');
            const messages = document.getElementById('messages');
            const form = document.getElementById('form');
            const input = document.getElementById('input');

            function setStatus(value) {
                status.innerHTML = value;
            }

            function printMessage(value) {
                const li = document.createElement('li');

                li.innerHTML = value;
                messages.appendChild(li);
            }

            /* my */
            form.onsubmit = () => {
                printMessage(input.value);
                input.value = '';
                return false;
            };
            /* end my */
        </script>
    </body>
</html>
