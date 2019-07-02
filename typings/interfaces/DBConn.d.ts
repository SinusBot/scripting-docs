export interface DBConn {

  /**
   * Use this, if you expect a result set
   * Note: strings will be returned as byte arrays to be binary safe
   * to convert to actual strings, please use helpers.toString(column)
   * @todo
   */
  query(queryString: string, parameters?: any[], callback?: (err: Error, data: any) => void)

  /**
   * use this instead of query if you dont expect a result
   * @todo
   */
  exec(queryString: string, parameters?: any[], callback?: (err: Error) => void)
}