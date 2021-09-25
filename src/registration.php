
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Therapists Registration</title>
    <link rel="stylesheet" href="../public/tailwind.css">
</head>

<body>

    <div class="min-h-screen flex items-center justify-center">

        <div class="bg-blue-100 p-8 rounded shadow-2xl w=1/2">

            <button class="float-right">
                &times;
            </button>
            <br />
            <h2 class="text-center text-2xl font-bold text-gray-900">Register as a Therapist</h2>

            <div id="therapist" class="model">

                <form class="mt-8 space-y-6" action="therapistregistration.php" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="remember" value="true">

                    <div class="rounded-md shadow-sm -space-y-px">

                        <div>
                            <label for="therapist-img">Choose your Profile</label><br>
                            <input id="image" name="image" type="file" autocomplete="current-password" required
                                class="bg-whiterelative block w-full px-3 py-2 border border-blue-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm">
                        </div>

                        <div>
                            <label for="therapist-name">Name</label>
                            <input id="name" name="name" type="text" autocomplete="name" required
                                class="relative block w-full px-3 py-2 border border-blue-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your Name here">
                        </div>

                        <div>
                            <label for="email-address">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required
                                class="relative block w-full px-3 py-2 border border-blue-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address">
                        </div>

                        <div>
                            <label for="password">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                required
                                class="relative block w-full px-3 py-2 border border-blue-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password">
                        </div>

                        <div>
                            <label for="therapist-img">Upload CV</label><br>
                            <input id="image" name="cv" type="file" autocomplete="current-password" required
                                class="bg-white appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm">
                        </div>

                        <div class="py-4">
                            <button type="submit" name="register"
                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
