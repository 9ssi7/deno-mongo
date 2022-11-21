type Result = {
  success: boolean;
  message: string;
};

type DataResult<D> = {
  data: D;
} & Result;

const result = ({ success, message }: Result): Result => ({
  success,
  message,
});

const dataResult = <D>({
  data,
  ...params
}: DataResult<D>): Result & DataResult<D> => ({
  ...result(params),
  data,
});

export const success = (message: string) => result({ success: true, message });
export const failure = (message: string) => result({ success: false, message });
export const successWithData = <D>(data: D, message: string) =>
  dataResult({ data, success: true, message });
export const failureWithData = <D>(data: D, message: string) =>
  dataResult({ data, success: false, message });
