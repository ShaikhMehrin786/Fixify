class JobAlreadyAccepted(Exception):
    pass


class WorkerOffline(Exception):
    pass


class WorkerBusy(Exception):
    pass