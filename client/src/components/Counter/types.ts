export interface AsyncProps {
  label: string;
}

export interface AsyncState {
  count: number;
}

export interface SyncProps {
  label: string;
  totalCount: number;
  onClick: () => void;
}

export interface SyncState {
  count: number;
}
