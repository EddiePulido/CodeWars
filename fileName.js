class FileNameExtractor {
  static extractFileName (dirtyFileName) {
      const i = dirtyFileName.lastIndexOf('.')
      const s = dirtyFileName.indexOf('_')
      return dirtyFileName.slice(s+1,i)
  }
}