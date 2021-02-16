import dayjs from 'dayjs';
import Storage from './storage';

export const NOTELIST = 'NOTELIST';

export type Note = {
  id: number;
  title: string;
  content: string;
  date: string | Date;
};

export default class NoteHelper {
  /**
   * 保存
   * @param title 标题
   * @param content 内容
   */
  public static async save(title: string, content: string) {
    title = title === '' ? '无标题' : title;
    const noteList = (await Storage.get<Note[]>(NOTELIST)) ?? [];
    if (!noteList.length) {
      await Storage.set<Note[]>(NOTELIST, []);
    }

    const newNote = {
      id: Date.now(),
      title,
      content: content.slice(0, 30).replace(/\s/g, '') + '...',
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };

    const newList: Note[] = [...noteList, newNote];
    await Storage.update(NOTELIST, newList);

    await Storage.set<Note>(newNote.id.toString(), { ...newNote, content });
  }

  /**
   * 查找
   * @param id 文章id
   */
  public static async find(id: string) {
    const note = await Storage.get<Note>(id);
    return note;
  }

  /**
   * 更新文章
   * @param id 文章id
   * @param title 标题
   * @param content 内容
   */
  public static async update(id: string, title: string, content: string) {
    title = title === '' ? '无标题' : title;
    const noteList = await Storage.get<Note[]>(NOTELIST);
    const newNote = {
      id,
      title,
      content: content.slice(0, 30).replace(/\s/g, '') + '...',
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };
    const newList = noteList?.map((note) => {
      if (note.id.toString() === id) {
        return newNote;
      }
      return note;
    });
    await Storage.update(NOTELIST, newList);
    await Storage.update(id, { ...newNote, content });
  }

  /**
   * 删除
   * @param id 文章ID
   */
  public static async remove(id: string) {
    try {
      const noteList = await Storage.get<Note[]>(NOTELIST);
      const newList = noteList?.filter((item) => item?.id.toString() !== id);
      await Storage.update(NOTELIST, newList);
      await Storage.remove(id);
    } catch (error) {
      console.log(error);
    }
  }
}
