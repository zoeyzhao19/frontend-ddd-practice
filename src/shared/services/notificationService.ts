
export function useNotifier() {
  return {
    notify: (message: string) => window.alert(message),
  };
}