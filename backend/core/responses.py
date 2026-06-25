from rest_framework.response import Response

class ApiResponse:

    @staticmethod
    def success(message, data=None, status=200):

        return Response(
            {
                "success": True,
                "message": message,
                "data": data
            },
            status=status
        )

    @staticmethod
    def error(message, status=400):

        return Response(
            {
                "success": False,
                "message": message
            },
            status=status
        )