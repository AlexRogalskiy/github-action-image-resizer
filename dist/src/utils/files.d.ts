import { MakeDirectoryOptions } from 'fs';
import { ConfigOptions } from '../../typings/domain-types';
export declare const ensureDirExists: (dir: string, options?: MakeDirectoryOptions) => void;
export declare const getConfigOptions: (fileName: string) => Partial<ConfigOptions>[];
export declare const storeDataAsJson: (filePath: string, fileName: string, data: any) => Promise<void>;
export declare const checkFileExists: (fileName: string, mode?: number) => boolean;
//# sourceMappingURL=files.d.ts.map