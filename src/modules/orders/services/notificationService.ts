interface INotificationService {
  notify(message: string): void;
}

export function useNotifier(): INotificationService {
  return {
    notify: (message: string) => window.alert(message),
  };
}